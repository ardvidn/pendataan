import { Column, Entity, Index } from "typeorm";

@Index("ref_buku_pkey", ["kdBuku", "thnAkhir", "thnAwal"], { unique: true })
@Entity("ref_buku", { schema: "public" })
export class RefBuku {
  @Column("character", { primary: true, name: "thn_awal", length: 4 })
  thnAwal!: string;

  @Column("character", { primary: true, name: "thn_akhir", length: 4 })
  thnAkhir!: string;

  @Column("character", { primary: true, name: "kd_buku", length: 1 })
  kdBuku!: string;

  @Column("bigint", { name: "nilai_min_buku" })
  nilaiMinBuku!: string;

  @Column("bigint", { name: "nilai_max_buku" })
  nilaiMaxBuku!: string;
}
