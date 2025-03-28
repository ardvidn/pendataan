import { Column, Entity, Index } from "typeorm";

@Index("g12_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noSrtTegoran", "noUrut", "thnPajakStp"], { unique: true })
@Index("g12_g8_fk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakStp"], {})
@Index("srt_tegoran_pkey", ["kdKantor", "kdKanwil", "noSrtTegoran"], {
  unique: true,
})
@Entity("srt_tegoran", { schema: "public" })
export class SrtTegoran {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "no_srt_tegoran", length: 30 })
  noSrtTegoran!: string;

  @Column("character", { name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { name: "thn_pajak_stp", length: 4 })
  thnPajakStp!: string;

  @Column("timestamp without time zone", { name: "tgl_terbit_srt_tegoran" })
  tglTerbitSrtTegoran!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_srt_tegoran",
    default: () => "statement_timestamp()",
  })
  tglCetakSrtTegoran!: Date;

  @Column("character", { name: "nip_pencetak_srt_tegoran", length: 18 })
  nipPencetakSrtTegoran!: string;
}
