import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from './Theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    marginBottom: SPACING.lg,
    // שינוי 5: שינוי רדיוס המסגרת מ-SPACING.md ל-25 כדי ליצור פינות עגולות יותר לכרטיסיה
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    gap: SPACING.md,
  },
  image: {
    width: 100, height: 100,
    borderRadius: SPACING.sm,
    backgroundColor: COLORS.border,
  },
  content: { flex: 1, justifyContent: 'space-between' },
  title: { fontSize: FONTS.standard, fontWeight: FONTS.semiBold, color: COLORS.primary },
  meta: { fontSize: FONTS.small, fontWeight: FONTS.semiBold, color: COLORS.secondary, marginBottom: SPACING.xs }
});