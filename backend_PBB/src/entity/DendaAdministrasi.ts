import { Column, Entity, Index } from "typeorm";

@Index("denda_administrasi_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnDenda"], { unique: true })
@Entity("denda_administrasi", { schema: "public" })
export class DendaAdministrasi {
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

  @Column("character", { primary: true, name: "thn_denda", length: 4 })
  thnDenda!: string;

  @Column("bigint", { name: "pokok_denda_adm", nullable: true })
  pokokDendaAdm!: string | null;

  @Column("bigint", { name: "pengurangan_denda", nullable: true })
  penguranganDenda!: string | null;

  @Column("bigint", { name: "denda_adm_stlh_pengurangan", nullable: true })
  dendaAdmStlhPengurangan!: string | null;

  @Column("character", {
    name: "status_tagihan_denda",
    nullable: true,
    length: 1,
  })
  statusTagihanDenda!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_denda",
    nullable: true,
  })
  tglRekamDenda!: Date | null;

  @Column("character", {
    name: "nip_perekam_denda",
    nullable: true,
    length: 18,
  })
  nipPerekamDenda!: string | null;
}
