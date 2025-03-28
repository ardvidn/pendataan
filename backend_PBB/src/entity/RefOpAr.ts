import { Column, Entity, Index } from "typeorm";

@Index("d35_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipAr", "noUrut"], {})
@Index("ref_op_ar_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Entity("ref_op_ar", { schema: "public" })
export class RefOpAr {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { name: "nip_ar", nullable: true, length: 18 })
  nipAr!: string | null;

  @Column("timestamp without time zone", { name: "tgl_awal", nullable: true })
  tglAwal!: Date | null;

  @Column("timestamp without time zone", { name: "tgl_akhir", nullable: true })
  tglAkhir!: Date | null;
}
