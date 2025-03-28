import { Column, Entity, Index } from "typeorm";

@Index("range_penyusutan_pkey", ["kdRangePenyusutan"], { unique: true })
@Entity("range_penyusutan", { schema: "public" })
export class RangePenyusutan {
  @Column("character", {
    primary: true,
    name: "kd_range_penyusutan",
    length: 1,
  })
  kdRangePenyusutan!: string;

  @Column("bigint", { name: "nilai_min_penyusutan", nullable: true })
  nilaiMinPenyusutan!: string | null;

  @Column("bigint", { name: "nilai_max_penyusutan", nullable: true })
  nilaiMaxPenyusutan!: string | null;
}
